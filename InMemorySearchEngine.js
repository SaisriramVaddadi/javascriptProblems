/* Problem url: https://learnersbucket.com/examples/interview/implement-an-in-memory-search-engine/ */

function InMemorySearchEngine() {
  this.entities = new Map();

  this.addDocuments = function (namespace, ...documents) {
    try {
      const existingEntity = this.entities.get(namespace);
      if (existingEntity) {
        this.entities.set(namespace, [...existingEntity, ...documents]);
      } else this.entities.set(namespace, [...documents]);
    } catch (e) {
      throw e;
    }
  };

  this.search = function (namespace, filterFunction, orderBy) {
     
  }
}
