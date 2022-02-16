import java.util.Locale;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		Locale.setDefault(Locale.US);
		
		Scanner sc = new Scanner(System.in);
		
		int x, y, conversor;
		
	
		do {
			
			System.out.println("Digite dois números:");
			x = sc.nextInt();
			y = sc.nextInt();
			
	
			 if (x < y) {
				System.out.println("Crescente"); 
			 }
			 else if (x > y) {
				 System.out.println("Descrescente");
			 }
		} while (x != y);
		
		
	
		sc.close();

	}

}
