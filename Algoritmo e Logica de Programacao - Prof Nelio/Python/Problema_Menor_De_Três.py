x: int
y: int
z: int

x = int(input("Digite um valor: "))
y = int(input("Digete outro valor: "))
z = int(input("Digite outro valor: "))

if x < y and x < z:
    print(f"MENOR = {x}")
elif y < z:
    print(f"MENOR = {y}")
else:
    print(f"MENOR = {z}")

