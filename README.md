# Product Catalog Service

### Overview

The Product Catalog Service is a backend service designed to manage a catalog of products. It provides RESTful APIs to perform various operations such as creating, updating, deleting, and retrieving product information. The service also supports filtering products based on specific criteria.

### Features

1. Create a New Product
   Add a new product to the catalog with details like name, description, price, category, etc.

2. Update an Existing Product
   Modify details of an existing product by specifying the product ID and updated information.

3. Delete a Product
   Remove a product from the catalog using its unique identifier.

4. Retrieve All Products
   Get a list of all products in the catalog.

5. Filter Products
   Retrieve products based on specific filters, such as category, price range, or availability.

6. Get a Single Product
   Fetch detailed information about a single product using its unique identifier.

# Generic Repository with Mongoose

This repository provides a generic repository class for working with Mongoose models in a Product-Catalog-Service.

## Features

* **CRUD Operations:** The `GenericRepository` class offers methods for creating, reading, updating, and deleting documents in a Mongoose model.
* **Type Safety:** Utilizing generics, the class ensures type safety for your models by enforcing specific document types.

## Usage

Generic Repository Methods
The GenericRepository class provides a set of core CRUD operations that can be used for any Mongoose model:

1. `create(data: Partial<T>): Promise<T | null>`
   - Purpose: Creates a new document in the collection.
   - Parameters:
      - data: A partial object containing the fields and values to be created.
   - Returns: A Promise that resolves to the newly created document or null if an error occurs.

2. `getAll(): Promise<T[]>`
   - Purpose: Retrieves all documents from the collection.
   - Returns: A Promise that resolves to an array of documents or an empty array if no documents are found.

3. `getById(id: Types.ObjectId | string): Promise<T | null>`
   - Purpose: Fetches a document by its ID.
   - Parameters:
      - `id`: The ID of the document to retrieve.
   - Returns: A Promise that resolves to the found document or null if the document is not found.

4. `update(id: Types.ObjectId | string, data: Partial<T>): Promise<T | null>`
   - Purpose: Updates an existing document based on its ID and provided data.
   - Parameters:
      - `id`: The ID of the document to update.
   - data: A partial object containing the fields and values to update.
   - Returns: A Promise that resolves to the updated document or null if an error occurs.
5. `destroy(id: Types.ObjectId | string): Promise<boolean>`
   - Purpose: Deletes a document by its ID.
   - Parameters:
      - `id`: The ID of the document to delete.
   - Returns: A Promise that resolves to true if the deletion is successful, false otherwise.