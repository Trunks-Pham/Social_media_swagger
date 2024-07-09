const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user.controller");

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         name:
 *           type: string
 *           description: The name of the user
 *         email:
 *           type: string
 *           description: The email of the user
 *       example:
 *         id: 12345
 *         name: Phạm Minh Thảo
 *         nickName: thaophamminh
 *         email: thaopham@example.com
 *         phoneNumber: 0123456789
 *         
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 */

/**
 * @swagger
 * /api/v1/user/create-user:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The user was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 */
router.post('/create-user', userController.createUser);

/**
 * @swagger
 * /api/v1/user/get-user:
 *   get:
 *     summary: Returns the list of all the users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/get-user', userController.getAllUsers);

/**
 * @swagger
 * /api/v1/user/get-user-detail/{id}:
 *   get:
 *     summary: Get a user by ID along with their posts
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *     responses:
 *       200:
 *         description: The user description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The user was not found
 */
router.get('/get-user-detail/:id', userController.getUserDetail);

/**
 * @swagger
 * /api/v1/user/update-user/{id}:
 *   put:
 *     summary: Update a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The user was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The user was not found
 *       500:
 *         description: Some server error
 */
router.put('/update-user/:id', userController.updateUser);

/**
 * @swagger
 * /api/v1/user/delete-user/{id}:
 *   delete:
 *     summary: Remove a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *     responses:
 *       200:
 *         description: The user was deleted
 *       404:
 *         description: The user was not found
 */
router.delete('/delete-user/:id', userController.deleteUser);

/**
 * @swagger
 * /api/v1/user/search-user:
 *   get:
 *     summary: Search for users by name
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The user name
 *     responses:
 *       200:
 *         description: The list of users matching the name
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       404:
 *         description: No users found
 */
router.get('/search-user', userController.searchUserByName);

/**
 * @swagger
 * /api/v1/user/search-user-by-email:
 *   get:
 *     summary: Search for users by email
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         required: true
 *         description: The user email
 *     responses:
 *       200:
 *         description: The list of users matching the email
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       404:
 *         description: No users found
 */
router.get('/search-user-by-email', userController.searchUserByEmail);

/**
 * @swagger
 * /api/v1/user/test:
 *   get:
 *     summary: Check the server status
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Server is up and running
 */
router.get('/test', userController.testServer);

module.exports = router;
