using System;
using System.Globalization;

namespace Problema_Soma_Vetor {
    class Program {
        static void Main(string[] args) {
            CultureInfo CI = CultureInfo.InvariantCulture;

            int n, i;
            double soma, media;

            Console.Write("Quantos números você vai digitar? ");
            n = int.Parse(Console.ReadLine());

            double[] vet = new double[n];

            for (i = 0; i < n; i++) {
                Console.Write("Digite um número: ");
                vet[i] = double.Parse(Console.ReadLine(), CI);
            }

            Console.Write("VALORES: ");
            for (i = 0; i < n; i++) {
                Console.Write(vet[i].ToString("F1", CI) + " ");
            }

            soma = 0;
            for (i = 0; i < n; i++) {
                soma = soma + vet[i];
            }

            Console.WriteLine();
            Console.WriteLine("SOMA = " + soma.ToString("F2", CI));

            media = soma / n;

            Console.WriteLine();
            Console.WriteLine("MÉDIA = " + media.ToString("F2", CI));



        }
    }
}
