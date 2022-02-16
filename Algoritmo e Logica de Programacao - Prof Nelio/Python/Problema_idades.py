idade1:int
idade2:int
nome1:str
nome2:str

print("DADOS DA PRIMEIRA PESSOA:")
nome1 = input("Nome: ")
idade1 = int(input("Idade: "))

print()
print("DADOS DA SEGUNDA PESSOA:")
nome2 = input("Nome: ")
idade2 = int(input("Idade: "))

media = (idade1 + idade2) / 2

print(f"A idade media entre {nome1} e {nome2} é de {media} anos!")
