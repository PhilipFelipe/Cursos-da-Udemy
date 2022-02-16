import java.util.Locale;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {

		Locale.setDefault(Locale.US);
		
		Scanner sc = new Scanner(System.in);
		
		double average;
		int age, age1;
		String name1, name2;
		
		System.out.println("Dados da primeira pessoa");
		System.out.print("Nome: ");
		name1 = sc.nextLine();
	    System.out.print("Idade: ");
	    age = sc.nextInt();
	    
	    System.out.println();
	    
	    System.out.println("Dados da segunda pessoa");
	    System.out.print("Nome: ");
	    sc.nextLine();
	    name2 = sc.nextLine();
	    System.out.print("Idade: ");
	    age1 = sc.nextInt();
	    
	    average = ((double)age + age1) / 2;
	    
	    System.out.println();
	    
	    System.out.println("A idade média de " + name1 + " e " + name2 + " é de " + String.format("%.1f", average) + " anos");
	    
	    
	    
	    sc.close();
	}

}
