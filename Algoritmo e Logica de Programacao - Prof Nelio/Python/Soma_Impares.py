

print("DIGITE DOIS NÚMEROS:")
x = int(input())
y = int(input())

if y < x:
    change = x
    x = y
    y = change

soma = 0
for i in range(x+1, y):
    if i % 2 != 0:
        soma = soma + i


print("SOMA DOS ÍMPARES = ", soma)
