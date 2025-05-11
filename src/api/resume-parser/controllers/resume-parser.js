import pdfParse from 'pdf-parse'

export default {
  async parse(ctx) {
    const { files } = ctx.request
    const resume = files?.resume

    if (!resume) return ctx.badRequest('No resume uploaded')

    const buffer = await resume.buffer

    try {
      const data = await pdfParse(buffer)
      return { text: data.text }
    } catch (err) {
      console.error('PDF parsing error:', err)
      return ctx.internalServerError('Failed to parse PDF')
    }
  },
}
