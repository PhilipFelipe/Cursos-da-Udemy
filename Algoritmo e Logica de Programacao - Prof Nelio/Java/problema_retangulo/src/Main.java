import java.util.Locale;
import java.util.Scanner;


public class Main {

	public static void main(String[] args) {

	Locale.setDefault(Locale.US);
		
		Scanner sc = new Scanner(System.in);
		
		double diagonal, height, base, area, perimeter;
		
		System.out.print("Valor da base do retângulo: ");
		base = sc.nextDouble();
		System.out.print("Valor da altura do retângulo: ");
		height = sc.nextDouble();
		
		area = base * height;
		perimeter = 2 * (base + height);
		diagonal = Math.sqrt((base * base) + (height * height));
		
		System.out.println("AREA = " + area);
		System.out.println("PERÍMETRO = " + perimeter);
		System.out.println("DIAGONAL = " + String.format("%.4f", diagonal));
		
		
         sc.close();

	}

      	
	
}
