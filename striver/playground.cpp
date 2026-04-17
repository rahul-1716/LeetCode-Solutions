#include <bits/stdc++.h>
using namespace std;

void patternOne(int n){
    for(int i = 0; i < n; i++){
        for(int j = 0; j < n; j++){
            cout<<" X ";
        }
        cout<<endl;
    }
}

void patternTwo(int n){
    for(int i = 0; i < n; i++){
        for(int j = 0; j <= i; j++){
            cout<<" X ";
        }
        cout<<endl;
    }
}

void patternThree(int n){
    for(int i = 1; i <= n; i++){
        for(int j = 1; j <= i; j++){
            cout<<j;
        }
        cout<<endl;
    }
}

void patternFour(int n){
    for(int i = 1; i <= n; i++){
        for(int j = 1; j <= i; j++){
            cout<<i;
        }
        cout<<endl;
    }
}

void patternFive(int n){
    for(int i = 1; i <= n; i++){
        for(int j = 1; j <= n - i + 1; j++){
            cout<<" X ";
        }
        cout<<endl;
    }
}

void patternSix(int n){
    for(int i = 1; i <= n; i++){
        for(int j = 1; j <= n - i + 1; j++){
            cout<<j;
        }
        cout<<endl;
    }
}

void patternSeven(int n){
    for(int i = 0; i <n ; i++){
        // SPACE
        for(int j = 0; j < n - i - 1; j++){
            cout<<" ";
        }
        //STAR
        for(int j = 0; j < 2*i+1; j++){
            cout<<"X";
        }
        //SPACE
        for(int j = 0; j < 2 * i + 1; j++){
            cout<<" ";
        }
        cout<<endl;
    }
}

void patternEight(int n){
    for(int i = 0; i < n; i++){
        //SPACE
        for(int j = 0; j < i; j++){
            cout<<" ";
        }
        //STAR
        for(int j = 0; j < (2 * n) - (2 * i + 1); j++){
            cout<<"X";
        }
        //SPACE
        for(int j = 0; j < i; j++){
            cout<<"";
        }
        cout<<endl;
    }
}

void patternNine(int n){
    patternSeven(n);
    patternEight(n);
}

void patternTen(int n){
    for(int i = 1; i <= 2 * n - 1; i++){
        int stars = i;
        if( i > n) stars = 2 * n - i;
        for(int j = 1; j <= stars; j++){
            cout<<"X";
        }
        cout<<endl;
    }
}
int main() {

   patternOne(5);
   cout<<endl;
   patternTwo(5);
   cout<<endl;
   patternThree(5);
   cout<<endl;
   patternFour(5);
   cout<<endl;
   patternFive(5);
   cout<<endl;
   patternSix(5);
   cout<<endl;
   patternSeven(5);
   cout<<endl;
   patternEight(8);
   cout<<endl;
   patternNine(5);
   cout<<endl;
   patternTen(8);
   cout<<endl;
   return 0;
}

