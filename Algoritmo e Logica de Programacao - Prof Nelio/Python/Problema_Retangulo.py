import cmath
import math

base: float
altura: float
area: float
perimetro: float
diagonal: float

base = float(input("Base: "))
altura = float(input("Altura: "))

area = base * altura
perimetro = 2 * (base + altura)
diagonal = math.sqrt(base*base + altura*altura)

print(f"Área = {area:.4f}")
print(f"Perímetro = {perimetro:.4f}")
print(f"Diagonal = {diagonal:.4f}")
