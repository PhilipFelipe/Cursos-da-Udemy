#include <bits/stdc++.h>


using namespace std;

int main()
{
    int n, i, j, cont, diag;

    cout << "Qual a ordem da matriz? ";
    cin >> n;

    int mat[n][n];


    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
         cout << "Elemento [" << i << "," << j << "]:";
         cin >> mat[i][j];
        }
    }

    cout << "\nDIAGONAL PRINCIPAL:\n";
    for (i = 0; i < n; i++) {
        cout << mat[i][i] << " ";
        }


      cont = 0;
      for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
          if (mat[i][j] < 0)
           cont = cont + 1;
        }
      }

    cout << "\nQUANTIDADE DE NEGATIVOS: " << cont << endl;



}
