#include <iostream>
#include <bits/stdc++.h>

using namespace std;

int main()
{
    int age, age1;
    double media;
    string name, name1;

    cout << "Dados da primeira pessoa:" << endl;
    cout << "Nome: ";
    getline(cin, name);
    cout << "Idade: ";
    cin >> age;

    cout << "Dados da segunda pessoa:" << endl;
    cout << "Nome: ";
    cin.ignore(INT_MAX, '\n');
    getline(cin, name1);
    cout << "Idade: ";
    cin >> age1;

    media = ((double)age + age1) / 2;
    cout << fixed << setprecision(1);
    cout << "A idade media entre " << name << " e " << name1 << ", eh de " << media << " anos";










  return 0;
}
