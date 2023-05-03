export default class TweetService {
  constructor(http){
    this.http = http;
  }
  // tweets = [
  //   {
  //     id: 1,
  //     text: '첫번째 트윗이예요!',
  //     createdAt: '2022-05-09T04:20:57.000Z',
  //     name: 'apple',
  //     username: '김사과',
  //     url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
  //   },
  // ];
  async getTweets(username) {
    const query = username ? `?username=${username}` : '';
    return this.http.fetch(`/tweets${query}`, {
      method: 'GET'
    })
  }

  async postTweet(text) {
    return this.http.fetch(`/tweets`, {
      method: 'POST',
      body: JSON.stringify({
        text,
        username: '김사과',
        name: 'apple'
      }),
    })
  }

  async deleteTweet(tweetId) {
    return this.http.fetch(`/tweets/${tweetId}`, {
      method: 'DELETE'
    });
  }

  async updateTweet(tweetId, text) {
    return this.http.fetch(`/tweets/${tweetId}`, {
      method: 'PUT',
      body: JSON.stringify({text})
    });
  }
}
