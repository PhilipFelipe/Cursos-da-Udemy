import java.util.Locale;
import java.util.Scanner;


public class Main {

	public static void main(String[] args) {

	Locale.setDefault(Locale.US);
		
		Scanner sc = new Scanner(System.in);
		
		double diagonal, height, base, area, perimeter;
		
		System.out.print("Valor da base do ret�ngulo: ");
		base = sc.nextDouble();
		System.out.print("Valor da altura do ret�ngulo: ");
		height = sc.nextDouble();
		
		area = base * height;
		perimeter = 2 * (base + height);
		diagonal = Math.sqrt((base * base) + (height * height));
		
		System.out.println("AREA = " + area);
		System.out.println("PER�METRO = " + perimeter);
		System.out.println("DIAGONAL = " + String.format("%.4f", diagonal));
		
		
         sc.close();

	}

      	
	
}
