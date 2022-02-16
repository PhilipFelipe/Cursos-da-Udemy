using System;
using System.Globalization;

namespace Problema_Crescente {
    class Program {
        static void Main(string[] args) {
            CultureInfo CI = CultureInfo.InvariantCulture;

            int x, y;

            Console.WriteLine("Digite dois números:");
            x = int.Parse(Console.ReadLine());
            y = int.Parse(Console.ReadLine());

            while (x != y) {

                if (x < y) {
                    Console.WriteLine("CRESCENTE");
                }
                else {
                    Console.WriteLine("DECRESCENTE");
                }
                Console.WriteLine("Digite outros dois números:");
                x = int.Parse(Console.ReadLine());
                y = int.Parse(Console.ReadLine());

            }


        }
    }
}
