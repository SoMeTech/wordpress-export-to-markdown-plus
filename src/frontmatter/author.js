// get author, without decoding
// WordPress doesn't allow funky characters in usernames anyway
module.exports = (post) => {
	return post.data.author_display_name[0];
}
