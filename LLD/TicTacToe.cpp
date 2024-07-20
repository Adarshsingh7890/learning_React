#include <iostream>

using namespace std;

char board[3][3] = {{'1', '2', '3'}, {'4', '5', '6'}, {'7', '8', '9'}};
int curr_player;
int curr_player_mark;

void displayBoard(){
    cout << "------Board--------" << endl;
    for (int i = 0 ; i < 3; i++){
        cout << " | ";
        for (int j = 0 ; j < 3; j++){
            cout << board[i][j] << " | ";
        }
        cout << " | " << endl;
    }
}

int winner(){
    for (int i = 0 ; i < 3; i++){
        if (board[i][0] == board[i][1] && board[i][1] == board[i][2]){
            return curr_player;
        }

        if (board[0][i] == board[1][i] && board[1][i] == board[2][i]){
            return curr_player;
        }
    }   

    // diagonals
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2])return curr_player;
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0])return curr_player;

    return 0;
}

void swapPlayer(){
    curr_player = curr_player == 1? 2:1;
    curr_player_mark = curr_player_mark == 'X' ? 'O':'X';
}

bool markSpot(int spot){
    int x = (spot-1)/3;
    int y = (spot-1)%3;

    if (board[x][y]!='X' && board[x][y]!='O'){
        board[x][y] = curr_player_mark;
        return true;
    }

    return false;
}

void playGame(){
    cout << "Starting the Game ..." << endl;
    char player_mark;
    cin >> player_mark ;
    cout << "Either X or O" << endl;

    curr_player = 1;
    curr_player_mark = player_mark;
    int win = 0;


    for (int i = 0 ; i < 9; i++){
        cout << "Pick the Spot" << endl;
        int spot;
        cin >> spot;

        if (spot < 1 || spot > 9){
            cout << "Incorrect spot picked" << endl;
            --i;
            continue;
        }

        if (!markSpot(spot)){
            cout << "Spot Marked" << endl;
            --i;
            continue;
        }

        displayBoard();

        win = winner();

        if (win  == 1){
            cout << "Player 1 with " << player_mark << " won the game." << endl;
            return ;
        }else if (win == 2){
            cout << "Player 1 with " << player_mark << " won the game." << endl;
            return ;
        }

        swapPlayer();

    }

    if (win == 0)cout << "The game is a tie." << endl;
}

int main(){
    playGame();
    return 0;
}