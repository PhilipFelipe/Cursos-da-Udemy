using System;
using System.Globalization;

namespace Problema_Retangulo {
    class Program {
        static void Main(string[] args) {
            CultureInfo CI = CultureInfo.InvariantCulture;

            double area, b, altura, p, diag;

            Console.Write("Base do Retângulo: ");
            b = double.Parse(Console.ReadLine(), CI);
            Console.Write("Altura do Retângulo: ");
            altura = double.Parse(Console.ReadLine(), CI);

            area = b * altura;
            p = 2 * (b + altura);
            diag = Math.Sqrt(b*b + altura*altura);

            Console.WriteLine("AREA = " + area.ToString("F4", CI));
            Console.WriteLine("PERÍMETRO = " + p.ToString("F4", CI)); 
            Console.WriteLine("DIAGONAL = " + diag.ToString("F4", CI));



        }
    }
}
