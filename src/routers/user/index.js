const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user.controller");

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API for users
 */

/**
 * @swagger
 * /users/create-user:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/create-user', userController.createUser);

/**
 * @swagger
 * /users/get-user:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A list of users
 */
router.get('/get-user', userController.getAllUsers);

/**
 * @swagger
 * /users/get-user-detail/{id}:
 *   get:
 *     summary: Get user details by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     responses:
 *       200:
 *         description: User details retrieved
 */
router.get('/get-user-detail/:id', userController.getUserDetail);

/**
 * @swagger
 * /users/update-user/{id}:
 *   put:
 *     summary: Update user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated
 */
router.put('/update-user/:id', userController.updateUser);

/**
 * @swagger
 * /users/delete-user/{id}:
 *   delete:
 *     summary: Delete user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     responses:
 *       200:
 *         description: Deleted
 */
router.delete('/delete-user/:id', userController.deleteUser);

/**
 * @swagger
 * /users/search-user:
 *   get:
 *     summary: Search users by name
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: username
 *         required: true
 *         schema:
 *           type: string
 *         description: The username to search for
 *     responses:
 *       200:
 *         description: A list of users matching the search criteria
 */
router.get('/search-user', userController.searchUserByName);

/**
 * @swagger
 * /users/search-user-by-email:
 *   get:
 *     summary: Search users by email
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *         description: The email to search for
 *     responses:
 *       200:
 *         description: A list of users matching the search criteria
 */
router.get('/search-user-by-email', userController.searchUserByEmail);

/**
 * @swagger
 * /users/test:
 *   get:
 *     summary: Test server
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Server is running
 */
router.get('/test', userController.testServer);

module.exports = router;
