import java.util.Locale;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
	
		Locale.setDefault(Locale.US);
		
		Scanner sc = new Scanner(System.in);
		
		int x, y, i, conversor;
		double sum;
		
		System.out.println("Digite dois números: ");
		x = sc.nextInt();
		y = sc.nextInt();
		
		if (y < x) {
			conversor = x;
			x = y;
			y = conversor;
		}
		
	    sum = 0;
		for (i = x+1; i < y; i++) {
			if (i % 2 != 0) {
				sum = sum + i;
			}
			
		}
		
		System.out.print("SOMA DOS ÍMPARES = " + sum);
		
		
		
		
		
		
      sc.close();
	}

}
