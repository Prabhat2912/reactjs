import { Service } from "appwrite/types/service";
import conf from "../conf/conf";

import { Client, Databases, Storage, Query, ID } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteColletionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite Service :: getPost() :: ", error);
      return false;
    }
  }
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteColletionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite Service :: getPosts() :: ", error);
      return false;
    }
  }
  async createPost({ title, slug, content, image, status, userid }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteColletionId,
        slug,
        {
          title,
          content,
          image,
          status,
          userid,
        }
      );
    } catch (error) {
      console.log("Appwrite Service :: createPost() :: ", error);
      return false;
    }
  }
  async updatePost(slug, { title, content, image, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        con.appwriteColletionId,
        slug,
        {
          title,
          content,
          image,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite Service :: updatePost() :: ", error);
      return false;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteColletionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite Service :: deletePost() :: ", error);
      return false;
    }
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite Service :: uploadFile() :: ", error);
      return false;
    }
  }
  async deleteFile(fileId) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,

        fileId
      );
    } catch (error) {
      console.log("Appwrite Service :: deleteFile() :: ", error);
      return false;
    }
  }
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId).href;
  }
}

const service = new Service();
export default service;
