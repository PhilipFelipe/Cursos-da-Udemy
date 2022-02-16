import java.util.Locale;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {

		Locale.setDefault(Locale.US);
		
		Scanner sc = new Scanner(System.in);
		
		int nu1, nu2, nu3;
		
		System.out.print("Primeiro valor = ");
		nu1 = sc.nextInt();
		System.out.print("Segundo valor = ");
		nu2 = sc.nextInt();
		System.out.print("Terceiro valor = ");
		nu3 = sc.nextInt();
		
		
		if (nu1 < nu2 && nu1 < nu3) {
			System.out.println("Menor = " + nu1);
		}
		else if (nu2 < nu3) {
			System.out.println("Menor = " + nu2);
		}
		else {
			System.out.println("Menor = " + nu3);
		}
		
       sc.close();
	}

}
