


class Game :
    turn = 'X'
    tie = False
    winner = None
    board = {
        'a1': None, 'b1': None, 'c1': None, 'a2': None, 'b2': None, 'c2': None, 'a3': None, 'b3': None, 'c3': None,
    }
    def __init__(self, name):
        self.name = name

    def print_board(self):
        b = self.board
        print(f"""
            A   B   C
        1)  {b['a1'] or ' '} | {b['b1'] or ' '} | {b['c1'] or ' '}
          -------------
        2)  {b['a2'] or ' '} | {b['b2'] or ' '} | {b['c2'] or ' '}
          -------------
        3)  {b['a3'] or ' '} | {b['b3'] or ' '} | {b['c3'] or ' '}
        """)

    def print_message(self):
        if self.tie == True:
            print("Tie game!")
        elif self.winner == 'X' or self.winner == 'O':
            print(f"{self.winner} wins the game!")
        else:
            print(f"It's player {self.turn}'s turn!")

    def render(self):
        self.print_board()
        self.print_message()

    def get_move(self):
        while True:
            move = input("Enter the position: ").lower()
            if move in self.board:
                if self.board[move] is None:
                    self.board[move] = self.turn
                    break
                else:
                    print('space already taken, please try again')
            else:
                print('INVALID INPUT, please try again')



    def check_winner(self):
        win = [
            ['a1','b1','c1'], ['a2','b2','c2'],['a3','b3','c3'],['a1','a2','a3'],['b1','b2','b3'],['c1','c2','c3'],['a1','b2','c3'],['c1','b2','a3'],
        ]
        for combo in win:
            pos1, pos2, pos3 = combo[0], combo[1], combo[2]

            if self.board[pos1] and (self.board[pos1] == self.board[pos2] == self.board[pos3]):
                print(f'Game End!! {self.turn} wins!!')
                self.winner = self.turn
                return True

        return False

    def switch_turn(self):
        if self.turn == "X":
            self.turn = "O"
        else:
            self.turn = "X"

    def check_tie(self):
       if None not in self.board.values() and self.winner is None:
            self.tie = True
            return False


    def play_game(self):
        print(f'Welcome to {self.name} Game')
        while True:
            print(f'winner: {self.winner}, turn: {self.turn}, tie: {self.tie}')
            self.render()
            self.get_move()
            self.check_winner()
            if self.winner is not None:
                self.render()
                break
            self.check_tie()
            if self.tie == True:
                self.render()
                break
            self.switch_turn()



game_instance = Game('Tic Tac Toe')
game_instance.play_game()
