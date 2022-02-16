#include <bits/stdc++.h>

using namespace std;

int main()
{
   double base, alt, area, p, diag;


   cout << "Digite a base: " << endl;
   cin >> base;
   cout << "Digite a altura: " << endl;
   cin >> alt;

   area = base * alt;
   p = 2 * (base + alt);
   diag = sqrt((base * base)+(alt * alt));


   cout << fixed << setprecision(4);
   cout << "AREA = " << area << endl;
   cout << "PERIMETRO = " << p << endl;
   cout << "DIAGONAL = " << diag << endl;


    return 0;
}
