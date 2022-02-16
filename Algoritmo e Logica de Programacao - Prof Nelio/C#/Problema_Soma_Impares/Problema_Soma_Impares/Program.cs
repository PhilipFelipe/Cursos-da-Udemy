using System;
using System.Globalization;

namespace Problema_Soma_Impares {
    class Program {
        static void Main(string[] args) {
            CultureInfo CI = CultureInfo.InvariantCulture;

            int x, y, changer, soma;

            Console.WriteLine("Digite dois números:");
            x = int.Parse(Console.ReadLine());
            y = int.Parse(Console.ReadLine());

            if (y < x) {
                changer = x;
                x = y;
                y = changer;
            }

            soma = 0;
            for (int i = x+1; i < y; i++) {
                if ((i % 2) != 0) {
                    soma = soma + i;
                }
            }

            Console.WriteLine("SOMA DOS ÍMPARES = " + soma);

        }
    }
}
