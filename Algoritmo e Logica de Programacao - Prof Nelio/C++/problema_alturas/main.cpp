#include <bits/stdc++.h>

using namespace std;

int main()
{
    int n, i;
    double media, soma, percent, cont;


    cout << "Quantas pessoas serao digitadas? ";
    cin >> n;

    int age[n];
    double stature[n];
    string name[n];

    for (i = 0; i < n; i++) {
        cout << "Dados da " << i+1 << "a pessoa" << endl;
        cout << "Nome: ";
        cin.ignore(INT_MAX, '\n');
        getline(cin, name[i]);
        cout << "Idade: ";
        cin >> age[i];
        cout << "Altura: ";
        cin >> stature[i];

    }
    soma = 0;
    for (i =0; i < n; i++) {
        soma = soma + stature[i];
    }

    media = soma / n;
    cout << fixed << setprecision(2);
    cout << "\nAltura media: " << media << endl;


    cont = 0;
    for (i = 0; i < n; i++) {
        if (age[i] < 16) {
           cont = cont + 1;
           percent = (cont * 100) / n;
        }
    }

    cout << "\nPessoas com menos de 16 anos: " << percent << "%" << endl;
    cout << fixed << setprecision(1);

    for (i = 0; i < n; i++) {
        if (age[i] < 16) {
           cout << name[i] << endl;
        }
    }




return 0;
}
