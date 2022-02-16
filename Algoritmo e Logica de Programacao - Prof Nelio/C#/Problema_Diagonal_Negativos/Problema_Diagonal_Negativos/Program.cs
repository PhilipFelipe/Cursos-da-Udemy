using System;
using System.Globalization;

namespace Problema_Diagonal_Negativos {
    class Program {
        static void Main(string[] args) {
            CultureInfo CI = CultureInfo.InvariantCulture;

            int n;

            Console.Write("Qual a ordem da matriz? ");
            n = int.Parse(Console.ReadLine());

            double[,] mat = new double[n, n];

            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    Console.Write("Elemento [" + i + "," + j + "]: ");
                    mat[i, j] = double.Parse(Console.ReadLine());
                }
            }

            Console.WriteLine();
            Console.Write("DIAGONAL PRINCIPAL: ");
            for (int i = 0; i < n; i++) {
                Console.WriteLine(mat[i, i] + " ");
            }


            int count = 0;
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    if (mat[i, j] < 0) {
                        count = count + 1;
                    }
                }
            }
                Console.WriteLine();
                Console.WriteLine("Quantidade de negativos: " + count);


        }
    }
}
