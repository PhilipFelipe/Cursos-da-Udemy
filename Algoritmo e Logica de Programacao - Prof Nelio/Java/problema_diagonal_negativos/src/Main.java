import java.util.Locale;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {

		Locale.setDefault(Locale.US);
		
		Scanner sc = new Scanner(System.in);
		
		int i, j, n, diag, cont;
		
		System.out.print("Qual a ordem da matriz? ");
		n = sc.nextInt();
		
		double [][] mat = new double[n][n];
		
		for (i = 0; i < n; i++) {
			for (j = 0; j < n; j++) {
				System.out.print("Elemento [" + i + "," + j + "]: ");
				mat[i][j] = sc.nextDouble();
			}
	      }
		
		System.out.println("DIAGONAL PRINCIPAL:");
		for (i = 0; i < n; i++) {
				System.out.print(mat[i][i] + " ");
		}
		
		
		cont = 0;
		for (i = 0; i < n; i++) {
			for (j = 0; j < n; j++) {
				if (mat[i][j] < 0) {
					cont = cont + 1;
				}
			}
		}
		
		System.out.println();
		
		System.out.println("QUANTIDADE DE NEGATIVOS = " + cont);
		
				
	sc.close();
		
	}

}
