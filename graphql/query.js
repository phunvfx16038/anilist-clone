import gql from "graphql-tag";

export const mediaQuery = gql`
  query tags($page: Int) {
    trending_Now: Page(page: $page, perPage: 5) {
      data: media(sort: TRENDING_DESC, type: ANIME) {
        ...comparisonFields
      }
    }
    upComing_Next_Season: Page(page: $page, perPage: 5) {
      data: media(type: ANIME, sort: POPULARITY_DESC) {
        ...comparisonFields
      }
    }
    popular_This_Season: Page(page: $page, perPage: 5) {
      data: media(type: ANIME, sort: FAVOURITES_DESC) {
        ...comparisonFields
      }
    }
    all_time_popular: Page(page: $page, perPage: 5) {
      data: media(sort: SCORE_DESC, type: ANIME) {
        ...comparisonFields
      }
    }

    top_100_Anime: Page(page: $page, perPage: 10) {
      data: media(sort: SCORE_DESC, type: ANIME) {
        id
        season
        trending
        genres
        popularity
        seasonYear
        format
        averageScore
        episodes
        duration
        status
        studios(isMain: true) {
          nodes {
            name
          }
        }
        coverImage {
          extraLarge
          large
          medium
          color
        }
        nextAiringEpisode {
          episode
          airingAt
        }
        title {
          romaji
          english
          native
          userPreferred
        }
      }
    }
  }

  fragment comparisonFields on Media {
    id
    format
    averageScore
    episodes
    studios(isMain: true) {
      nodes {
        name
      }
    }
    status
    coverImage {
      extraLarge
      large
      medium
      color
    }
    nextAiringEpisode {
      episode
      airingAt
    }
    genres
    title {
      romaji
      english
      native
      userPreferred
    }
  }
`;

export const getListTypeAnime = gql`
  query tags($page: Int, $sort: [MediaSort]) {
    getListTypeAnime: Page(page: $page) {
      data: media(sort: $sort, type: ANIME) {
        ...comparisonFields
      }
    }
  }

  fragment comparisonFields on Media {
    id
    format
    averageScore
    episodes
    status
    genres
    volumes
    nextAiringEpisode {
      id
    }
    studios(isMain: true) {
      nodes {
        name
      }
    }
    coverImage {
      extraLarge
      large
      medium
      color
    }
    title {
      romaji
      english
      native
      userPreferred
    }
  }
`;

export const getDetailAnime = gql`
  query tags($id: Int) {
    getDetailAnime: Media(id: $id) {
      ...comparisonFields
    }
  }
  fragment comparisonFields on Media {
    id
    format
    averageScore
    meanScore
    episodes
    season
    duration
    hashtag
    type
    status
    startDate {
      year
      month
      day
    }
    source
    synonyms
    format
    staff {
      nodes {
        name {
          full
          native
          userPreferred
        }
        languageV2
        homeTown
        image {
          large
          medium
        }
      }
    }
    characters {
      nodes {
        name {
          full
          native
          userPreferred
        }
        image {
          large
          medium
        }
        media {
          edges {
            characterRole
          }
        }
      }
    }
    popularity
    meanScore
    trending
    favourites
    tags {
      name
      rank
      category
    }
    relations {
      nodes {
        title {
          romaji
          english
          userPreferred
        }
        hashtag
        type
        format
        status
        coverImage {
          extraLarge
          large
          medium
          color
        }
        bannerImage
        genres
      }
    }
    trailer {
      id
    }
    hashtag
    chapters
    bannerImage
    status
    genres
    volumes
    description
    nextAiringEpisode {
      id
    }
    coverImage {
      extraLarge
      large
      medium
      color
    }
    title {
      romaji
      english
      native
      userPreferred
    }
  }
`;
