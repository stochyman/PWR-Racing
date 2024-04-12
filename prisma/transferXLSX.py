import pandas as pd

# Load the Excel file
file_path = 'prisma/MEMBERS OF PWR RACING TEAM.xlsx'
data = pd.read_excel(file_path)

# Dictionary to expand department abbreviations
department_expansions = {
    "MNG": "management",
    "MKT": "marketing",
    "COMP": "composites",
    "SOFT": "software",
    "ELE": "electrical",
    "MECH": "mechanical",
    "VP": "vehicle performance",
    "WORKSHOP": "infrastructure",
    "DRIVERS": "drivers"
}

# Dictionary to determine bolid names based on the year
bolid_names = {
    "2022/23": "RT13e",
    "2022/21": "RT12e",
    "2021/20": "RT11b",
    "2020/19": "RTX"
}

# List to hold all member data
members = []

# Process each row in the DataFrame
for _, row in data.iterrows():
    name_parts = row[0].split()
    name = name_parts[0]
    surname = name_parts[1] if len(name_parts) > 1 else ""
    print(name, surname)
    # Prepare the roles list
    roles = []
    for col in [4, 6, 7, 8]:
        if pd.notna(row[col]) and row[col] != "–":
            role_info = row[col].split()
            year = role_info[-1].strip("()")  # Extracting the year part
            role = " ".join(role_info[:-1])  # The role part

            if year in bolid_names:
                bolid_name = bolid_names[year]
                department = department_expansions.get(row['DZIAŁ'], row['DZIAŁ'])  # Default to raw if not in dict
                roles.append({"department": department, "role": role, "bolidName": bolid_name})

    # Append this member's data to the list
    members.append({"name": name, "surname": surname, "roles": roles})

# Print the processed data
for member in members:
    print(member)
