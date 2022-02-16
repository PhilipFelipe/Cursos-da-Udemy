using System;
using System.Globalization;

namespace Problema_Menor_De_Tres {
    class Program {
        static void Main(string[] args) {
            CultureInfo CI = CultureInfo.InvariantCulture;

            int x, y, z;

            Console.Write("Primeiro valor: ");
            x = int.Parse(Console.ReadLine());
            Console.Write("Segundo valor: ");
            y = int.Parse(Console.ReadLine());
            Console.Write("Terceiro valor: ");
            z = int.Parse(Console.ReadLine());


            if (x < y && x < z) {
                Console.WriteLine("MENOR = " + x);
            }
            else if (y < z) {
                Console.WriteLine("MENOR = " + y);
            } else {
                Console.WriteLine("MENOR = " + z);
            }


        }
    }
}
