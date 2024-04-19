import openpyxl

# Ścieżka do pliku XLSX
file_path = 'prisma/MEMBERS OF PWR RACING TEAM.xlsx'

# Otworzenie pliku Excela
wb = openpyxl.load_workbook(file_path)

# Wybór aktywnego arkusza
sheet = wb.active

# Lista do przechowywania danych
data_list = []

# Słownik zamiany skrótów na pełne nazwy
department_full_names = {
    "MKT": "marketing",
    "COMP": "composites",
    "SOFT": "software",
    "ELE": "electrical",
    "MECH": "mechanical",
    "VP": "vehicle performance",
    "MNG": "management"
}

# Iteracja przez wiersze, pomijając dwa pierwsze wiersze
for row in sheet.iter_rows(min_row=3, max_row=sheet.max_row):
    name = (row[0].value or "").strip().lower()  # Imię i nazwisko, zmienione na małe litery i sprawdzenie None
    department = (row[1].value or "").strip().upper()  # Departament, zabezpieczenie przed None
    department = department_full_names.get(department, department.lower())  # Zamiana na pełną nazwę
    role = (row[2].value or "undefined").strip().lower()  # Rola, zmieniona na małe litery, zabezpieczenie przed None

    # Przypisywanie bolidów w zależności od kolumny
    bolid_names = {5: "RT12e", 6: "RT11b", 7: "RTX"}

    roles_list = [{'department': department, 'role': role, 'bolidName': 'RT13e'}]

    # Sprawdzenie dodatkowych kolumn z rolami
    for col_idx in range(5, 8):
        extra_role = (row[col_idx-1].value or '–').strip()
        # Dodanie różnych wariantów myślników i półpauz do sprawdzenia
        if extra_role not in ('-', '–', '—') and extra_role:
            roles_list.append({
                'department': department,
                'role': extra_role.lower(),
                'bolidName': bolid_names[col_idx]
            })

    if name:
        first_name, *surname = name.split()
        surname = ' '.join(surname)  # Łączenie wieloczłonowego nazwiska
        member_data = {
            'name': first_name,
            'surname': surname,
            'roles': roles_list
        }
        data_list.append(member_data)

# Wyświetlenie sformatowanej listy
print(data_list)
