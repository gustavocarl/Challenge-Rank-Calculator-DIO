const nameOfPlayer = playerName("Gustavo");

const playerBalance = WinBalance(101, 5);

const playerRank =  RankOfPlayer(playerBalance);

console.log(`O Herói ${nameOfPlayer}, tem de saldo de ${playerBalance} e está no rank ${playerRank}`);

function playerName(name)
{
    return name;
}


function WinBalance(wins, loses)
{
    const rank = wins - loses;
    return rank;
}


function RankOfPlayer(balance)
{
    let rank = " ";
    if (balance <= 10)
    {
        rank = "Ferro";    
    }
    else if (balance <= 20)
    {
        rank = "Bronze";
    }
    else if (balance <= 50)
    {
        rank = "Prata";
    }
    else if (balance <= 80)
    {
        rank = "Ouro";
    }
    else if (balance <= 90)
    {
        rank = "Diamante";
    }
    else if (balance <= 100)
    {
        rank = "Lendário";
    }
    else 
    {
        rank = "Imortal";
    }
    
    return rank;
}