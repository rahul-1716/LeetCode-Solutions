#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<string> twoEditWords(vector<string>& queries, vector<string>& dictionary) {
        vector<string> result;

        for (const string& query : queries) {
            for (const string& word : dictionary) {
                int differences = 0;

                for (int i = 0; i < static_cast<int>(query.size()); i++) {
                    if (query[i] != word[i]) {
                        differences++;
                    }

                    if (differences > 2) {
                        break;
                    }
                }

                if (differences <= 2) {
                    result.push_back(query);
                    break;
                }
            }
        }

        return result;
    }
};
