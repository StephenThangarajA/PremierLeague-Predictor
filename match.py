import pandas as pd

file_path = 'epl_match_result.csv'
df = pd.read_csv(file_path)

def display_team_results(home_team_name, away_team_name):
    team_matches = df[(df['HomeTeam'] == home_team_name) & (df['AwayTeam'] == away_team_name)]
    goals1 = 0
    goals2 = 0
    count1 = 0
    count2 = 0
    for _, match in team_matches.iterrows():
        home_team = match['HomeTeam']
        away_team = match['AwayTeam']
        home_goals = match['HomeGoals']
        away_goals = match['AwayGoals']
        goals1+=home_goals
        goals2+=away_goals
        count1+=1
        count2+=1
    print("HOME TEAM: "+home_team_name+" "+ str(int(goals1/count1)))
    print("AWAY TEAM: " + away_team_name + " " + str(int(goals2/count2)))
home_team_name = input("Enter the home team name: ")
away_team_name = input("Enter the away team name: ")

display_team_results(home_team_name, away_team_name)