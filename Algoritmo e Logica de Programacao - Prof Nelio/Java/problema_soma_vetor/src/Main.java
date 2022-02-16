import java.util.Locale;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {

		Locale.setDefault(Locale.US);
		
		Scanner sc = new Scanner(System.in);
		
		int n, i;
		double sum, media;
		
		System.out.print("Quantos números você vai digitar? ");
		n = sc.nextInt();
		
		double [] vet = new double[n];
		
		for (i = 0; i < n; i++) {
			vet[i] = sc.nextDouble();
		}
		
		System.out.print("VALORES: ");
		for (i = 0; i < n; i++) {
			System.out.print(+ (int)vet[i] + " ");
		}
		
		System.out.println();
		
		sum = 0;
		System.out.print("SOMA = ");
		for (i = 0; i < n; i++) {
			sum = sum + vet[i];
		}
		System.out.print(String.format("%.2f", sum) + " ");
		
		System.out.println();
		
		media = sum / n;		
		System.out.println("MÉDIA = " +  String.format("%.2f", media));
		
		
		
	sc.close();	

	}

}
