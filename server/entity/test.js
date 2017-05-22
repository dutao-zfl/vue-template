import TestModel from '../models/test'

class TestEntity {
  constructor() {
    this.model = TestModel
  }

  save (obj) {
    return new this.model(obj).save()
  }

  findById (id) {
    return new this.model().findByAccount(id)
  }
}

export default new TestEntity()
