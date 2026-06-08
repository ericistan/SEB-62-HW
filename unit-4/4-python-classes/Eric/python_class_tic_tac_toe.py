class Game:

    # initial game state
    def __init__(self):
        self.turn = 'X'
        self.winner = None
        self.tie = False
        self.board = {
            'a1': None, 'b1': None, 'c1': None,
            'a2': None, 'b2': None, 'c2': None,
            'a3': None, 'b3': None, 'c3': None,
        }

    # Uses 'b' as a shorthand for self.board.
    # Each cell shows 'X', 'O', or a blank space if empty.
    def print_board(self):
        b = self.board
        print(f"""
      A   B   C
  1)  {b['a1'] or ' '} | {b['b1'] or ' '} | {b['c1'] or ' '}
      ----------
  2)  {b['a2'] or ' '} | {b['b2'] or ' '} | {b['c2'] or ' '}
      ----------
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
            move = input("Enter a valid move (example: A1): ").lower()
            if move not in self.board:
                print("Invalid input. Try something like A1.")
            elif self.board[move] is not None:
                print("That spot is already taken! Pick another.")
            else:
                self.board[move] = self.turn
                break

    def check_for_winner(self):
        b = self.board
        winning_combos = [
            ['a1', 'b1', 'c1'],
            ['a2', 'b2', 'c2'],
            ['a3', 'b3', 'c3'],
            ['a1', 'a2', 'a3'],
            ['b1', 'b2', 'b3'],
            ['c1', 'c2', 'c3'],
            ['a1', 'b2', 'c3'],
            ['a3', 'b2', 'c1'],
        ]

        for combo in winning_combos:
            first_cell = combo[0]
            second_cell = combo[1]
            third_cell = combo[2]

            if b[first_cell] and b[first_cell] == b[second_cell] == b[third_cell]:
                self.winner = self.turn

    def check_for_tie(self):
        if self.winner:
            return
        if all(self.board[spot] is not None for spot in self.board):
            self.tie = True

    def switch_turn(self):
        if self.turn == 'X':
            self.turn = 'O'
        else:
            self.turn = 'X'

    def play_game(self):
        print("Welcome! Let's play Tic-Tac-Toe!")
        while not self.winner and not self.tie:
            self.render()
            self.get_move()
            self.check_for_winner()
            self.check_for_tie()
            self.switch_turn()
        self.render()


game_instance = Game()
game_instance.play_game()