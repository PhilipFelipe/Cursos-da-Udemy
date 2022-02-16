#include <iostream>

using namespace std;

int main()
{
    int n1, n2, n3, smaller;

    cout << "Digite o primeiro valor: ";
    cin >> n1;
    cout << "Digite o segundo valor: ";
    cin >> n2;
    cout << "Digite o terceiro valor: ";
    cin >> n3;



    if (n1 < n2 && n2 < n3) {
       smaller = n1;
       cout << "Menor = " << smaller << endl;
    }
    else if (n2 < n3) {
        smaller = n2;
        cout << "Menor = " << smaller << endl;
    }
    else {
        smaller = n3;
        cout << "Menor = " << smaller << endl;
    }

return 0;

}
