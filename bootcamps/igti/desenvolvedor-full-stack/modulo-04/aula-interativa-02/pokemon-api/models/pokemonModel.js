export default (mongoose) => {
  const schema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    hp: {
      type: Number,
      required: true,
    },
    attack: {
      type: Number,
      required: true,
    },
    defense: {
      type: Number,
      required: true,
    },
    speed: {
      type: Number,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
  });

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();

    object.id = _id;

    return object;
  });

  const pokemonModel = mongoose.model('pokemon', schema, 'pokemon');

  return pokemonModel;
};
