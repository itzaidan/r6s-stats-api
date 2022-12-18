module.exports = class Stats {
    constructor(url, name, header, season_name, kd, kills, deaths, win_, wins, losses, abandons, time_played, matches, kills_match, mmr, max_mmr, rank, max_rank, rank_img, max_rank_img) {

        this.url = url;
        this.name = name;
        this.header = header;
        this.season_name = season_name;

        this.kd = kd,
        this.kills = kills,
        this.deaths = deaths,
        this.win_ = win_,
        this.wins = wins,
        this.losses = losses,
        this.abandons = abandons,

        this.matches = matches,
        this.kills_match = kills_match,

        this.mmr = mmr,
        this.max_mmr = max_mmr,
        this.rank = rank,
        this.max_rank = max_rank,
        this.rank_img = rank_img,
        this.max_rank_img = max_rank_img
    }
}