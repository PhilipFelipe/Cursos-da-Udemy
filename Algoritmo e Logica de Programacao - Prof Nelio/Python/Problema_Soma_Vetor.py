n: int

n = int(input("Quantos números você vai digitar? "))

vet: [float] = [0 for x in range(n)]

for i in range(0, n):
    vet[i] = float(input("Digite um número: "))


print("VALORES: ", end="")
for i in range(0, n):
     print(f"{vet[i]:.1f} ", end="")

print()
soma = 0
for i in range(0, n):
    soma = soma + vet[i]

media = soma / n

print(f"SOMA = {soma:.2f}")
print(f"MEDIA = {media:.2f}")

