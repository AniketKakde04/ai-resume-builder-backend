export default {
  routes: [
    {
      method: 'POST',
      path: '/parse-resume',
      handler: 'resume-parser.parse',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
}
