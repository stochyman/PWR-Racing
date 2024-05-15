import openpyxl
import json

# Ścieżka do pliku Excel
file_path = 'prisma/members.xlsx'

def read_data_and_extend(file_path):
    # Wczytanie skoroszytu Excel
    wb = openpyxl.load_workbook(file_path)
    ws = wb.active

    result_dict = {}
    current_value = None

    # Przeczytanie danych z arkusza
    for row in ws.iter_rows(min_row=1, max_col=3, values_only=True):
        if row[0] == "IMIĘ I NAZWISKO":
            current_value = row[2]
        elif current_value is not None and row[0] is not None:
            entry = [row[2], row[1], current_value]
            if row[0] in result_dict:
                result_dict[row[0]].append(entry)
            else:
                result_dict[row[0]] = [entry]

    return result_dict

def format_and_save_to_json(data, filename):
    # Formatowanie danych i zapis do pliku JSON
    formatted_data = []
    for full_name, roles in data.items():
        name, surname = full_name.split()
        member_data = {
            "name": name.lower(),
            "surname": surname.lower(),
            "roles": []
        }
        for role in roles:
            if role[0] is not None:
                member_data["roles"].append({
                    "department": role[1].lower(),
                    "role": role[0].lower(),
                    "bolidName": role[2]
                })
        formatted_data.append(member_data)

    # Zapis danych do pliku JSON
    with open(filename, 'w', encoding='utf-8') as json_file:
        json.dump(formatted_data, json_file, indent=4)

# Użycie funkcji
data_with_extended_entries = read_data_and_extend(file_path)
output_filename = 'teamMembersData.json'
format_and_save_to_json(data_with_extended_entries, output_filename)
print(f"Dane zostały zapisane do pliku '{output_filename}'.")
