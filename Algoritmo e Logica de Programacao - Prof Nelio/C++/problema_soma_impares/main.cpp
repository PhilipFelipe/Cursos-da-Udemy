#include <bits/stdc++.h>
#include <iostream>

using namespace std;

int main()
{
    int x, y, i, inverse;
    double soma;

    cout << "Digite dois numeros: " << endl;
    cin >> x;
    cin >> y;

    if (y < x) {
        inverse = x;
        x = y;
        y = inverse;
    }

    soma = 0;
    for (i = x+1; i < y; i++) {
        if (i % 2 != 0) {
            soma = soma + i;
        }

    }

    cout << "SOMA DOS IMPARES = " << soma << endl;








}
