const axios = require('axios');
const { getFiles } = require('../../services/files');

jest.mock("axios");

it('should get list of file names', async () => {
    axios.get.mockImplementation(() => Promise.resolve({ data: { data: { FileNames: ['file1', 'file2', 'file3']}} }));
    const files = await getFiles();
    expect(typeof files.FileNames).toBe('object');
    expect(typeof files.FileNames[0]).toBe('string');
    expect(files.FileNames[0]).toBe('file1');
});

it('should throw error while getting list of file names', async () => {
    axios.get.mockImplementation(() => Promise.reject(new Error('error')));
    expect(async () => {
        await getFiles();
    }).rejects.toThrowError('error');
});
