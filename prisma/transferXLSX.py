import openpyxl

# Ścieżka do pliku XLSX
file_path = 'prisma/MEMBERS OF PWR RACING TEAM.xlsx'

# Otworzenie pliku Excela
wb = openpyxl.load_workbook(file_path)

# Wybór aktywnego arkusza
sheet = wb.active

# Słownik do przechowywania danych
data_dict = {}

# Iteracja przez wiersze, pomijając dwa pierwsze wiersze
for row in sheet.iter_rows(min_row=3, max_row=sheet.max_row):
    name = row[0].value.strip() if row[0].value else None  # Imię i nazwisko
    department = row[1].value.strip() if row[1].value else 'undefined'  # Departament
    role = row[2].value.strip() if row[2].value else 'undefined'  # Rola
    bolidName = 'RT13e'  # Założenie, że wszystkie role odnoszą się do tego samego bolidu

    if name is not None:
        if name in data_dict:
            # Jeżeli osoba jest już w słowniku, dodaj do niej nową rolę
            data_dict[name]['roles'].append({'department': department, 'role': role, 'bolidName': bolidName})
        else:
            # W przeciwnym razie, utwórz nowy wpis dla tej osoby
            data_dict[name] = {
                'name': name.split()[0],  # Pierwsze imię
                'surname': ' '.join(name.split()[1:]),  # Reszta jako nazwisko
                'roles': [{'department': department, 'role': role, 'bolidName': bolidName}]
            }

# Wyświetlenie sformatowanego słownika
print(data_dict)
