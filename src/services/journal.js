const posts = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "First Day",
    content:
      "So am about to start another semester at University and I have been incredibly lazy for the past two weeks. I got hooked to video games, I started gaining weight and stopped reading literature.I just discovered a youtube channel that talked about doing dopomine detox to start enjoying the simple things again. I feel like I need this really badly so here are my rules for it and perhaps someone here might also like this idea",

    postDate: "2018-01-03T19:04:28.809Z",
    liked: true,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Second Day",
    content:
      "How far we can go in some field determined by the way we improve our skills. If someone improves by 1% in a year and another by 1000%, it will make a huge difference. So if you know how to improve your skills most effectively, you will be the best in anything you do",
    postDate: "2018-01-03T19:04:28.809Z",
    liked: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Third Day",
    content:
      "Many of us think that we need a natural talent or be prodigies to be the best at what we do. But the truth is you can be the best one in anything you do if you know how to practice right",
    postDate: "2018-01-03T19:04:28.809Z",
    liked: true,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Fourth Day",
    content:
      "I think I am a good ideator. I can see problems, get to the depths of it, and find a good solution. I know my solutions while not being final often have substance to them because the few times I have actually shared these with others, these were well received",
    postDate: "2018-01-03T19:04:28.809Z",
    liked: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Fifth Day",
    content:
      "I’ve always had trouble being consistent and smart with bodyweight exercises such as push-ups and squats. I wanted to incorporate them into my routine on a consistent basis.",
    postDate: "2018-01-03T19:04:28.809Z",
    liked: true,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Sixth Day",
    content:
      "This is a pretty weird one... but my whole life I have been so shy and embarrassed, I’m ashamed of myself in every way possible and now matter how hard I try I fall into the same habits and ways. I want to make something of myself and make a career path for myself but I’m so afraid of putting myself out there, and doing literally anything! I admire successful people and I more as less can’t see myself being able to achieve anything great or doing anything good. I hate this mind set and I want to change but I always go back to my old ways. I’m not sure if my past experiences have had a large effect on me and made this uncomfortable with myself but I’m wondering if anyone else feels like this? What’s are that appropriate steps to take with your self hatred so bad you physically don’t think you deserve to make something of yourself lol. This is a bit of a self deprecating post but I’m trying to figure out how to sort myself out once and for all I’m tired lol",
    postDate: "2018-01-03T19:04:28.809Z",
    liked: true,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Seven Day",
    content:
      "I’ve been there. I still have those moments where I want to hide and not have to see anyone. I do Zumba or something that makes me feel good. I look at my life and say “I’ve been doing my best with what I have”. Habits can be broken. You are special in your own way. Self love is the most important thing. Don’t be ashamed of yourself because you are here for a reason and you are who you are. You should love yourself and proud of who you are.",
    postDate: "2018-01-03T19:04:28.809Z",
    liked: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "Eight Day",
    content:
      "Recently though, I've just gone right into the shower. Not sure what it is specifically, but it's helping me feel more awake. Now when I don't do this, I feel as though I'm costing myself hours of the day that I would not be able to use in my previously zombified state.",
    postDate: "2018-01-03T19:04:28.809Z",
    liked: true,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "Ninth Day",
    content:
      "Waking up from a blissful, night-long shower, I jumped into bed for a quick freshen up. Having tossed the spent bed frame into the woodchipper, I sprinkled some of the resultant sawdust onto my k-flakes for a spot o' the old bed in breakfast. The weather was gloriously nonsensical, despite it being only half past green on a Yonkday",
    postDate: "2018-01-03T19:04:28.809Z",
    liked: false,
  },
];

export function getPosts() {
  return posts;
}

export function getPost(id) {
  return posts.find((p) => p._id === id);
}
