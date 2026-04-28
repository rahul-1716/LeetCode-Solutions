#include <bits/stdc++.h>
using namespace std;

void patternOne(int n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cout << " X ";
        }
        cout << '\n';
    }
}

void patternTwo(int n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j <= i; j++) {
            cout << " X ";
        }
        cout << '\n';
    }
}

void patternThree(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cout << j;
        }
        cout << '\n';
    }
}

void patternFour(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cout << i;
        }
        cout << '\n';
    }
}

void patternFive(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i + 1; j++) {
            cout << " X ";
        }
        cout << '\n';
    }
}

void patternSix(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i + 1; j++) {
            cout << j;
        }
        cout << '\n';
    }
}

void patternSeven(int n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            cout << ' ';
        }

        for (int j = 0; j < 2 * i + 1; j++) {
            cout << 'X';
        }

        for (int j = 0; j < n - i - 1; j++) {
            cout << ' ';
        }
        cout << '\n';
    }
}

void patternEight(int n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < i; j++) {
            cout << ' ';
        }

        for (int j = 0; j < (2 * n) - (2 * i + 1); j++) {
            cout << 'X';
        }

        for (int j = 0; j < i; j++) {
            cout << ' ';
        }
        cout << '\n';
    }
}

void patternNine(int n) {
    patternSeven(n);
    patternEight(n);
}

void patternTen(int n) {
    for (int i = 1; i <= 2 * n - 1; i++) {
        int stars = i;
        if (i > n) {
            stars = 2 * n - i;
        }

        for (int j = 1; j <= stars; j++) {
            cout << 'X';
        }
        cout << '\n';
    }
}

int main() {
    patternOne(5);
    cout << '\n';
    patternTwo(5);
    cout << '\n';
    patternThree(5);
    cout << '\n';
    patternFour(5);
    cout << '\n';
    patternFive(5);
    cout << '\n';
    patternSix(5);
    cout << '\n';
    patternSeven(5);
    cout << '\n';
    patternEight(8);
    cout << '\n';
    patternNine(5);
    cout << '\n';
    patternTen(8);
    cout << '\n';

    return 0;
}
