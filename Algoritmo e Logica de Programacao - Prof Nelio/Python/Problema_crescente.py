x: int
y: int

print("DIGITE DOIS NÚMEROS:")
x = int(input())
y = int(input())

while x != y:
     if x < y:
         print("CRESCENTE")
     else:
         print("DECRESCENTE")

     print("DIGITE OUTROS DOIS NÚMEROS:")
     x = int(input())
     y = int(input())
