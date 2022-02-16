using System;
using System.Globalization;

namespace Problema_Idades {
    class Program {
        static void Main(string[] args) {

            CultureInfo CI = CultureInfo.InvariantCulture;

            int idade1, idade2;
            string nome1, nome2;
            double media;

            Console.WriteLine("DADOS DA PRIMEIRA PESSOA:");
            Console.Write("Nome: ");
            nome1 = Console.ReadLine();
            Console.Write("Idade: ");
            idade1 = int.Parse(Console.ReadLine());

            Console.WriteLine();

            Console.WriteLine("DADOS DA SEGUNDA PESSOA:");
            Console.Write("Nome: ");
            nome2 = Console.ReadLine();
            Console.WriteLine("Idade: ");
            idade2 = int.Parse(Console.ReadLine());

            media = (idade1 + idade2) / 2;

            Console.WriteLine();
            Console.WriteLine("A idade média entre " + nome1 + " e " + nome2 + " é " + media.ToString("F1", CI));




        }
    }
}
