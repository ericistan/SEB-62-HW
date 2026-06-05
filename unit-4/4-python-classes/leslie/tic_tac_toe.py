import random


class TicTacToe:
    def __init__(self):
        self.turn = 0
        self.player_offset = 0
        self.state = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
        self.game_over = False
        self.player_icons = [" ", "✖︎", "○"]
        self.rows = ["1", "2", "3"]
        self.columns = ["A", "B", "C"]
        self.row_break_str = "    --- --- ---"
        self.quit = False

    def who_starts(self):
        self.player_offset = random.randint(0, 1)

    def get_player_id(self):
        return (self.player_offset + self.turn) % 2 + 1

    def print_board(self):
        print(f"     {self.columns[0]}   {self.columns[1]}   {self.columns[2]} ")
        print(self.row_break_str)
        for row_idx, row in enumerate(self.state):
            row_str = f"{self.rows[row_idx]}  |"
            for player_id in row:
                row_str += f" {self.player_icons[player_id]} |"
            print(row_str)
            print(self.row_break_str)

    def _get_available(self):
        available_cells = []
        for row_idx, row in enumerate(self.state):
            for col_idx, cell in enumerate(row):
                if not cell:
                    available_cells.append(f"{row_idx + 1}{self.columns[col_idx]}")

        return available_cells

    def player_turn(self):
        print("")
        available_moves = self._get_available()
        print(f"Available {"moves" if len(available_moves) > 1 else "move"}: {available_moves}")
        while True:
            try:
                player_id = self.get_player_id()
                cell = input(f"Turn {self.turn}. Player {player_id} ({self.player_icons[player_id]}), your move: ").upper()
                if not (cell in available_moves):
                    print("Invalid move, try again.")
                else:
                    row_idx = self.rows.index(cell[0])
                    col_idx = self.columns.index(cell[1])
                    self.state[row_idx][col_idx] = player_id
                    return
            except ValueError:
                print("Invalid move, try again.")

    def is_win(self):
        for row in self.state:
            if row[0] and (row[0] == row[1] == row[2]):
                return True

        for col_idx in range(len(self.columns)):
            if self.state[0][col_idx] and self.state[0][col_idx] == self.state[1][col_idx] == self.state[2][col_idx]:
                return True

        if self.state[0][0] and (self.state[0][0] == self.state[1][1] == self.state[2][2]):
            return True

        if self.state[0][2] and (self.state[0][2] == self.state[1][1] == self.state[2][0]):
            return True

        return False

    def check_game_over(self):
        if self.is_win():
            self.print_board()
            player_id = self.get_player_id()
            print(f"Player {player_id} ({self.player_icons[player_id]}) won in {self.turn} turns!")
            self.game_over = True
        elif not self._get_available():
            self.print_board()
            print(f"It is a tie!")
            self.game_over = True
        else:
            self.turn += 1

    def play_again(self):
        while True:
            try:
                response = input("Play again? (y/n): ")
                if response == "y":
                    self.__init__()
                    self._start()
                elif response == "n":
                    self.quit = True
                    return
                else:
                    raise ValueError()
            except ValueError:
                print("Invalid input, try again.")

    def _start(self):
        self.who_starts()
        while not self.game_over:
            self.print_board()
            self.player_turn()
            self.check_game_over()

    def play(self):
        while not self.quit:
            self._start()
            self.play_again()


new_game = TicTacToe()
new_game.play()